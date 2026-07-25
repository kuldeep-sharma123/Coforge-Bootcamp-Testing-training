/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 80.59, "KoPercent": 19.41};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.50925, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.0175, 500, 1500, "interest- HTTP Request"], "isController": false}, {"data": [0.02875, 500, 1500, "education - HTTP Request"], "isController": false}, {"data": [0.7225, 500, 1500, "HomePage-HTTP Request"], "isController": false}, {"data": [0.02375, 500, 1500, "basics - HTTP Request"], "isController": false}, {"data": [0.7075, 500, 1500, "charts - HTTP Request"], "isController": false}, {"data": [0.13625, 500, 1500, "practice login - HTTP Request"], "isController": false}, {"data": [1.0, 500, 1500, "product 3 -HTTP Request"], "isController": false}, {"data": [0.8175, 500, 1500, "currency converter-HTTP Request"], "isController": false}, {"data": [0.68, 500, 1500, "Trending-HTTP Request"], "isController": false}, {"data": [1.0, 500, 1500, "product 1 -HTTP Request"], "isController": false}, {"data": [0.9925, 500, 1500, "home- HTTP Request"], "isController": false}, {"data": [0.03125, 500, 1500, "build credit card - HTTP Request"], "isController": false}, {"data": [0.77125, 500, 1500, "formula - HTTP Request"], "isController": false}, {"data": [0.105, 500, 1500, "contact - HTTP Request"], "isController": false}, {"data": [0.1225, 500, 1500, "login - HTTP Request"], "isController": false}, {"data": [0.0275, 500, 1500, "credit score - HTTP Request"], "isController": false}, {"data": [0.9975, 500, 1500, "product 2 -HTTP Request"], "isController": false}, {"data": [0.6275, 500, 1500, "homepage-HTTP Request"], "isController": false}, {"data": [1.0, 500, 1500, "product 8 - HTTP Request"], "isController": false}, {"data": [0.59375, 500, 1500, "ShopFoodDrink - HTTP Request"], "isController": false}, {"data": [0.61375, 500, 1500, "weight management-HTTP Request"], "isController": false}, {"data": [0.12875, 500, 1500, "course - HTTP Request"], "isController": false}, {"data": [0.66, 500, 1500, "medicine and healthcare-HTTP Request"], "isController": false}, {"data": [0.1, 500, 1500, "blog - HTTP Request"], "isController": false}, {"data": [0.82625, 500, 1500, "example-HTTP Request"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 10000, 1941, 19.41, 936.4946999999989, 7, 126947, 364.0, 1984.0, 2028.0, 3499.1399999999594, 29.836941116796705, 3332.396939009563, 4.030318061792306], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["interest- HTTP Request", 400, 393, 98.25, 22.98499999999999, 7, 389, 13.0, 22.0, 40.59999999999991, 240.99, 69.61364427427776, 83.90415615210581, 9.313544204664113], "isController": false}, {"data": ["education - HTTP Request", 400, 385, 96.25, 46.55749999999999, 8, 1589, 13.0, 36.80000000000007, 231.95, 1057.8500000000001, 54.892273912446825, 90.29377015575683, 7.290380128996844], "isController": false}, {"data": ["HomePage-HTTP Request", 400, 0, 0.0, 658.9950000000002, 337, 2437, 514.5, 1264.7, 1337.9, 1518.8200000000002, 5.1959523531169225, 1944.9955798885792, 0.832164244053882], "isController": false}, {"data": ["basics - HTTP Request", 400, 389, 97.25, 26.039999999999996, 7, 615, 13.0, 20.900000000000034, 53.19999999999982, 393.910000000001, 65.62756357670222, 93.1432334392945, 8.972518457752257], "isController": false}, {"data": ["charts - HTTP Request", 400, 0, 0.0, 523.5049999999998, 274, 2368, 564.5, 861.0, 1065.3999999999994, 1828.7800000000038, 5.705971298964366, 176.05484686599524, 0.7912577387235742], "isController": false}, {"data": ["practice login - HTTP Request", 400, 0, 0.0, 2500.0375000000004, 912, 126947, 1975.0, 2984.8, 3066.0, 4013.88, 1.2779920189398417, 152.1022793986089, 0.17971762766341526], "isController": false}, {"data": ["product 3 -HTTP Request", 400, 0, 0.0, 119.06749999999998, 77, 386, 100.0, 150.90000000000003, 314.9, 377.7700000000002, 24.610841075493756, 277.8227481080416, 3.14845720790008], "isController": false}, {"data": ["currency converter-HTTP Request", 400, 0, 0.0, 466.27249999999975, 274, 3005, 293.0, 867.1000000000004, 1159.9, 1709.2500000000016, 5.628174642259149, 115.53147556668684, 0.8189433805630989], "isController": false}, {"data": ["Trending-HTTP Request", 400, 0, 0.0, 745.8250000000005, 345, 1919, 567.0, 1289.4, 1409.95, 1658.4600000000005, 5.29878525348064, 1960.799506488528, 0.7658400561671237], "isController": false}, {"data": ["product 1 -HTTP Request", 400, 0, 0.0, 120.32499999999993, 78, 403, 99.0, 172.70000000000044, 309.0, 340.94000000000005, 23.91343337119627, 239.76848340258266, 3.05923805822921], "isController": false}, {"data": ["home- HTTP Request", 400, 0, 0.0, 159.76500000000007, 77, 776, 100.0, 316.90000000000003, 339.95, 539.7800000000002, 22.807617744326606, 193.2222286071673, 2.784133025430494], "isController": false}, {"data": ["build credit card - HTTP Request", 400, 386, 96.5, 29.92499999999997, 7, 635, 12.0, 27.900000000000034, 198.74999999999994, 367.8700000000001, 61.90034045187248, 99.13953086312287, 8.221138966264315], "isController": false}, {"data": ["formula - HTTP Request", 400, 0, 0.0, 476.3925000000003, 274, 3004, 297.0, 849.9000000000001, 913.55, 1926.5400000000004, 5.704181164793794, 138.83887827277394, 0.7742980292054076], "isController": false}, {"data": ["contact - HTTP Request", 400, 0, 0.0, 3828.68, 798, 125976, 1983.0, 2989.9, 3027.95, 125015.83, 1.2698694891632512, 172.73794080344643, 0.16369411383745036], "isController": false}, {"data": ["login - HTTP Request", 400, 0, 0.0, 3124.747500000002, 577, 126024, 1982.0, 2963.6000000000004, 3012.95, 123816.86000000109, 1.211379700910352, 144.17449631210593, 0.17035027044051823], "isController": false}, {"data": ["credit score - HTTP Request", 400, 388, 97.0, 29.497499999999995, 8, 616, 12.0, 25.800000000000068, 206.0, 329.2100000000007, 63.70441153049848, 93.79012631390349, 8.46074215639433], "isController": false}, {"data": ["product 2 -HTTP Request", 400, 0, 0.0, 141.96500000000026, 78, 966, 109.0, 320.90000000000003, 334.74999999999994, 371.8600000000001, 24.23361201987156, 451.49532509011874, 3.1001984126984126], "isController": false}, {"data": ["homepage-HTTP Request", 400, 0, 0.0, 695.3974999999999, 277, 2516, 579.0, 1175.2000000000003, 1406.6499999999999, 2087.760000000003, 5.727950968739707, 270.097500465396, 0.7271812753282832], "isController": false}, {"data": ["product 8 - HTTP Request", 400, 0, 0.0, 133.96499999999995, 94, 447, 111.0, 206.0, 328.74999999999994, 366.83000000000015, 23.562676720075398, 475.7175571394911, 3.0143658694627713], "isController": false}, {"data": ["ShopFoodDrink - HTTP Request", 400, 0, 0.0, 774.8825000000004, 358, 2088, 639.0, 1350.9, 1429.6499999999999, 1648.4100000000005, 5.227049983665468, 2028.5860676657953, 0.7095311989545899], "isController": false}, {"data": ["weight management-HTTP Request", 400, 0, 0.0, 723.5850000000003, 372, 1703, 606.5, 1316.9, 1437.8, 1665.7200000000003, 5.269050912204439, 2021.9637351396298, 0.7512513995916484], "isController": false}, {"data": ["course - HTTP Request", 400, 0, 0.0, 3984.7874999999967, 590, 125989, 1989.5, 3001.9, 7732.45, 125003.78, 1.2094457714752216, 188.06955860426177, 0.15590511897922776], "isController": false}, {"data": ["medicine and healthcare-HTTP Request", 400, 0, 0.0, 688.8849999999994, 360, 2275, 565.0, 1273.2000000000003, 1358.6, 1635.7600000000002, 5.290795338809306, 1921.260448804115, 0.7905192254275625], "isController": false}, {"data": ["blog - HTTP Request", 400, 0, 0.0, 2966.542500000001, 699, 125893, 1990.5, 3022.6000000000004, 8830.799999999967, 11880.880000000001, 1.2345221781909312, 202.6166095410818, 0.15552086033850598], "isController": false}, {"data": ["example-HTTP Request", 400, 0, 0.0, 423.7399999999999, 274, 1777, 291.0, 622.0, 871.9, 1393.6500000000003, 5.704669271798968, 115.88166554950227, 0.7409384894035769], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["429/Too Many Requests", 1941, 100.0, 19.41], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 10000, 1941, "429/Too Many Requests", 1941, "", "", "", "", "", "", "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["interest- HTTP Request", 400, 393, "429/Too Many Requests", 393, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["education - HTTP Request", 400, 385, "429/Too Many Requests", 385, "", "", "", "", "", "", "", ""], "isController": false}, {"data": [], "isController": false}, {"data": ["basics - HTTP Request", 400, 389, "429/Too Many Requests", 389, "", "", "", "", "", "", "", ""], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": ["build credit card - HTTP Request", 400, 386, "429/Too Many Requests", 386, "", "", "", "", "", "", "", ""], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": ["credit score - HTTP Request", 400, 388, "429/Too Many Requests", 388, "", "", "", "", "", "", "", ""], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
