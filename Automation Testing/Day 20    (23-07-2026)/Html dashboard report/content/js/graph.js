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
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 112.0, "minX": 0.0, "maxY": 1205.0, "series": [{"data": [[0.0, 112.0], [0.1, 112.0], [0.2, 112.0], [0.3, 112.0], [0.4, 112.0], [0.5, 112.0], [0.6, 112.0], [0.7, 112.0], [0.8, 112.0], [0.9, 112.0], [1.0, 119.0], [1.1, 119.0], [1.2, 119.0], [1.3, 119.0], [1.4, 119.0], [1.5, 119.0], [1.6, 119.0], [1.7, 119.0], [1.8, 119.0], [1.9, 119.0], [2.0, 123.0], [2.1, 123.0], [2.2, 123.0], [2.3, 123.0], [2.4, 123.0], [2.5, 123.0], [2.6, 123.0], [2.7, 123.0], [2.8, 123.0], [2.9, 125.0], [3.0, 125.0], [3.1, 125.0], [3.2, 125.0], [3.3, 125.0], [3.4, 125.0], [3.5, 125.0], [3.6, 125.0], [3.7, 125.0], [3.8, 125.0], [3.9, 127.0], [4.0, 127.0], [4.1, 127.0], [4.2, 127.0], [4.3, 127.0], [4.4, 127.0], [4.5, 127.0], [4.6, 127.0], [4.7, 127.0], [4.8, 130.0], [4.9, 130.0], [5.0, 130.0], [5.1, 130.0], [5.2, 130.0], [5.3, 130.0], [5.4, 130.0], [5.5, 130.0], [5.6, 130.0], [5.7, 130.0], [5.8, 131.0], [5.9, 131.0], [6.0, 131.0], [6.1, 131.0], [6.2, 131.0], [6.3, 131.0], [6.4, 131.0], [6.5, 131.0], [6.6, 131.0], [6.7, 134.0], [6.8, 134.0], [6.9, 134.0], [7.0, 134.0], [7.1, 134.0], [7.2, 134.0], [7.3, 134.0], [7.4, 134.0], [7.5, 134.0], [7.6, 134.0], [7.7, 137.0], [7.8, 137.0], [7.9, 137.0], [8.0, 137.0], [8.1, 137.0], [8.2, 137.0], [8.3, 137.0], [8.4, 137.0], [8.5, 137.0], [8.6, 138.0], [8.7, 138.0], [8.8, 138.0], [8.9, 138.0], [9.0, 138.0], [9.1, 138.0], [9.2, 138.0], [9.3, 138.0], [9.4, 138.0], [9.5, 138.0], [9.6, 138.0], [9.7, 138.0], [9.8, 138.0], [9.9, 138.0], [10.0, 138.0], [10.1, 138.0], [10.2, 138.0], [10.3, 138.0], [10.4, 138.0], [10.5, 138.0], [10.6, 138.0], [10.7, 138.0], [10.8, 138.0], [10.9, 138.0], [11.0, 138.0], [11.1, 138.0], [11.2, 138.0], [11.3, 138.0], [11.4, 138.0], [11.5, 140.0], [11.6, 140.0], [11.7, 140.0], [11.8, 140.0], [11.9, 140.0], [12.0, 140.0], [12.1, 140.0], [12.2, 140.0], [12.3, 140.0], [12.4, 140.0], [12.5, 140.0], [12.6, 140.0], [12.7, 140.0], [12.8, 140.0], [12.9, 140.0], [13.0, 140.0], [13.1, 140.0], [13.2, 140.0], [13.3, 140.0], [13.4, 140.0], [13.5, 140.0], [13.6, 140.0], [13.7, 140.0], [13.8, 140.0], [13.9, 140.0], [14.0, 140.0], [14.1, 140.0], [14.2, 140.0], [14.3, 140.0], [14.4, 140.0], [14.5, 140.0], [14.6, 140.0], [14.7, 140.0], [14.8, 140.0], [14.9, 140.0], [15.0, 140.0], [15.1, 140.0], [15.2, 140.0], [15.3, 141.0], [15.4, 141.0], [15.5, 141.0], [15.6, 141.0], [15.7, 141.0], [15.8, 141.0], [15.9, 141.0], [16.0, 141.0], [16.1, 141.0], [16.2, 142.0], [16.3, 142.0], [16.4, 142.0], [16.5, 142.0], [16.6, 142.0], [16.7, 142.0], [16.8, 142.0], [16.9, 142.0], [17.0, 142.0], [17.1, 142.0], [17.2, 142.0], [17.3, 142.0], [17.4, 142.0], [17.5, 142.0], [17.6, 142.0], [17.7, 142.0], [17.8, 142.0], [17.9, 142.0], [18.0, 142.0], [18.1, 142.0], [18.2, 142.0], [18.3, 142.0], [18.4, 142.0], [18.5, 142.0], [18.6, 142.0], [18.7, 142.0], [18.8, 142.0], [18.9, 142.0], [19.0, 142.0], [19.1, 143.0], [19.2, 143.0], [19.3, 143.0], [19.4, 143.0], [19.5, 143.0], [19.6, 143.0], [19.7, 143.0], [19.8, 143.0], [19.9, 143.0], [20.0, 144.0], [20.1, 144.0], [20.2, 144.0], [20.3, 144.0], [20.4, 144.0], [20.5, 144.0], [20.6, 144.0], [20.7, 144.0], [20.8, 144.0], [20.9, 144.0], [21.0, 145.0], [21.1, 145.0], [21.2, 145.0], [21.3, 145.0], [21.4, 145.0], [21.5, 145.0], [21.6, 145.0], [21.7, 145.0], [21.8, 145.0], [21.9, 145.0], [22.0, 146.0], [22.1, 146.0], [22.2, 146.0], [22.3, 146.0], [22.4, 146.0], [22.5, 146.0], [22.6, 146.0], [22.7, 146.0], [22.8, 146.0], [22.9, 146.0], [23.0, 146.0], [23.1, 146.0], [23.2, 146.0], [23.3, 146.0], [23.4, 146.0], [23.5, 146.0], [23.6, 146.0], [23.7, 146.0], [23.8, 146.0], [23.9, 146.0], [24.0, 146.0], [24.1, 146.0], [24.2, 146.0], [24.3, 146.0], [24.4, 146.0], [24.5, 146.0], [24.6, 146.0], [24.7, 146.0], [24.8, 146.0], [24.9, 146.0], [25.0, 146.0], [25.1, 146.0], [25.2, 146.0], [25.3, 146.0], [25.4, 146.0], [25.5, 146.0], [25.6, 146.0], [25.7, 146.0], [25.8, 146.0], [25.9, 146.0], [26.0, 146.0], [26.1, 146.0], [26.2, 146.0], [26.3, 146.0], [26.4, 146.0], [26.5, 146.0], [26.6, 146.0], [26.7, 147.0], [26.8, 147.0], [26.9, 147.0], [27.0, 147.0], [27.1, 147.0], [27.2, 147.0], [27.3, 147.0], [27.4, 147.0], [27.5, 147.0], [27.6, 147.0], [27.7, 147.0], [27.8, 147.0], [27.9, 147.0], [28.0, 147.0], [28.1, 147.0], [28.2, 147.0], [28.3, 147.0], [28.4, 147.0], [28.5, 147.0], [28.6, 147.0], [28.7, 147.0], [28.8, 147.0], [28.9, 147.0], [29.0, 147.0], [29.1, 147.0], [29.2, 147.0], [29.3, 147.0], [29.4, 147.0], [29.5, 147.0], [29.6, 149.0], [29.7, 149.0], [29.8, 149.0], [29.9, 149.0], [30.0, 149.0], [30.1, 149.0], [30.2, 149.0], [30.3, 149.0], [30.4, 149.0], [30.5, 149.0], [30.6, 149.0], [30.7, 149.0], [30.8, 149.0], [30.9, 149.0], [31.0, 149.0], [31.1, 149.0], [31.2, 149.0], [31.3, 149.0], [31.4, 149.0], [31.5, 150.0], [31.6, 150.0], [31.7, 150.0], [31.8, 150.0], [31.9, 150.0], [32.0, 150.0], [32.1, 150.0], [32.2, 150.0], [32.3, 150.0], [32.4, 150.0], [32.5, 150.0], [32.6, 150.0], [32.7, 150.0], [32.8, 150.0], [32.9, 150.0], [33.0, 150.0], [33.1, 150.0], [33.2, 150.0], [33.3, 150.0], [33.4, 151.0], [33.5, 151.0], [33.6, 151.0], [33.7, 151.0], [33.8, 151.0], [33.9, 151.0], [34.0, 151.0], [34.1, 151.0], [34.2, 151.0], [34.3, 153.0], [34.4, 153.0], [34.5, 153.0], [34.6, 153.0], [34.7, 153.0], [34.8, 153.0], [34.9, 153.0], [35.0, 153.0], [35.1, 153.0], [35.2, 153.0], [35.3, 153.0], [35.4, 153.0], [35.5, 153.0], [35.6, 153.0], [35.7, 153.0], [35.8, 153.0], [35.9, 153.0], [36.0, 153.0], [36.1, 153.0], [36.2, 153.0], [36.3, 153.0], [36.4, 153.0], [36.5, 153.0], [36.6, 153.0], [36.7, 153.0], [36.8, 153.0], [36.9, 153.0], [37.0, 153.0], [37.1, 153.0], [37.2, 154.0], [37.3, 154.0], [37.4, 154.0], [37.5, 154.0], [37.6, 154.0], [37.7, 154.0], [37.8, 154.0], [37.9, 154.0], [38.0, 154.0], [38.1, 154.0], [38.2, 154.0], [38.3, 154.0], [38.4, 154.0], [38.5, 154.0], [38.6, 154.0], [38.7, 154.0], [38.8, 154.0], [38.9, 154.0], [39.0, 154.0], [39.1, 155.0], [39.2, 155.0], [39.3, 155.0], [39.4, 155.0], [39.5, 155.0], [39.6, 155.0], [39.7, 155.0], [39.8, 155.0], [39.9, 155.0], [40.0, 156.0], [40.1, 156.0], [40.2, 156.0], [40.3, 156.0], [40.4, 156.0], [40.5, 156.0], [40.6, 156.0], [40.7, 156.0], [40.8, 156.0], [40.9, 156.0], [41.0, 156.0], [41.1, 156.0], [41.2, 156.0], [41.3, 156.0], [41.4, 156.0], [41.5, 156.0], [41.6, 156.0], [41.7, 156.0], [41.8, 156.0], [41.9, 156.0], [42.0, 156.0], [42.1, 156.0], [42.2, 156.0], [42.3, 156.0], [42.4, 156.0], [42.5, 156.0], [42.6, 156.0], [42.7, 156.0], [42.8, 156.0], [42.9, 157.0], [43.0, 157.0], [43.1, 157.0], [43.2, 157.0], [43.3, 157.0], [43.4, 157.0], [43.5, 157.0], [43.6, 157.0], [43.7, 157.0], [43.8, 157.0], [43.9, 157.0], [44.0, 157.0], [44.1, 157.0], [44.2, 157.0], [44.3, 157.0], [44.4, 157.0], [44.5, 157.0], [44.6, 157.0], [44.7, 157.0], [44.8, 157.0], [44.9, 157.0], [45.0, 157.0], [45.1, 157.0], [45.2, 157.0], [45.3, 157.0], [45.4, 157.0], [45.5, 157.0], [45.6, 157.0], [45.7, 157.0], [45.8, 158.0], [45.9, 158.0], [46.0, 158.0], [46.1, 158.0], [46.2, 158.0], [46.3, 158.0], [46.4, 158.0], [46.5, 158.0], [46.6, 158.0], [46.7, 159.0], [46.8, 159.0], [46.9, 159.0], [47.0, 159.0], [47.1, 159.0], [47.2, 159.0], [47.3, 159.0], [47.4, 159.0], [47.5, 159.0], [47.6, 159.0], [47.7, 160.0], [47.8, 160.0], [47.9, 160.0], [48.0, 160.0], [48.1, 160.0], [48.2, 160.0], [48.3, 160.0], [48.4, 160.0], [48.5, 160.0], [48.6, 160.0], [48.7, 160.0], [48.8, 160.0], [48.9, 160.0], [49.0, 160.0], [49.1, 160.0], [49.2, 160.0], [49.3, 160.0], [49.4, 160.0], [49.5, 160.0], [49.6, 160.0], [49.7, 160.0], [49.8, 160.0], [49.9, 160.0], [50.0, 160.0], [50.1, 160.0], [50.2, 160.0], [50.3, 160.0], [50.4, 160.0], [50.5, 161.0], [50.6, 161.0], [50.7, 161.0], [50.8, 161.0], [50.9, 161.0], [51.0, 161.0], [51.1, 161.0], [51.2, 161.0], [51.3, 161.0], [51.4, 161.0], [51.5, 161.0], [51.6, 161.0], [51.7, 161.0], [51.8, 161.0], [51.9, 161.0], [52.0, 161.0], [52.1, 161.0], [52.2, 161.0], [52.3, 161.0], [52.4, 162.0], [52.5, 162.0], [52.6, 162.0], [52.7, 162.0], [52.8, 162.0], [52.9, 162.0], [53.0, 162.0], [53.1, 162.0], [53.2, 162.0], [53.3, 162.0], [53.4, 162.0], [53.5, 162.0], [53.6, 162.0], [53.7, 162.0], [53.8, 162.0], [53.9, 162.0], [54.0, 162.0], [54.1, 162.0], [54.2, 162.0], [54.3, 163.0], [54.4, 163.0], [54.5, 163.0], [54.6, 163.0], [54.7, 163.0], [54.8, 163.0], [54.9, 163.0], [55.0, 163.0], [55.1, 163.0], [55.2, 163.0], [55.3, 169.0], [55.4, 169.0], [55.5, 169.0], [55.6, 169.0], [55.7, 169.0], [55.8, 169.0], [55.9, 169.0], [56.0, 169.0], [56.1, 169.0], [56.2, 172.0], [56.3, 172.0], [56.4, 172.0], [56.5, 172.0], [56.6, 172.0], [56.7, 172.0], [56.8, 172.0], [56.9, 172.0], [57.0, 172.0], [57.1, 172.0], [57.2, 176.0], [57.3, 176.0], [57.4, 176.0], [57.5, 176.0], [57.6, 176.0], [57.7, 176.0], [57.8, 176.0], [57.9, 176.0], [58.0, 176.0], [58.1, 178.0], [58.2, 178.0], [58.3, 178.0], [58.4, 178.0], [58.5, 178.0], [58.6, 178.0], [58.7, 178.0], [58.8, 178.0], [58.9, 178.0], [59.0, 178.0], [59.1, 180.0], [59.2, 180.0], [59.3, 180.0], [59.4, 180.0], [59.5, 180.0], [59.6, 180.0], [59.7, 180.0], [59.8, 180.0], [59.9, 180.0], [60.0, 180.0], [60.1, 180.0], [60.2, 180.0], [60.3, 180.0], [60.4, 180.0], [60.5, 180.0], [60.6, 180.0], [60.7, 180.0], [60.8, 180.0], [60.9, 180.0], [61.0, 181.0], [61.1, 181.0], [61.2, 181.0], [61.3, 181.0], [61.4, 181.0], [61.5, 181.0], [61.6, 181.0], [61.7, 181.0], [61.8, 181.0], [61.9, 181.0], [62.0, 181.0], [62.1, 181.0], [62.2, 181.0], [62.3, 181.0], [62.4, 181.0], [62.5, 181.0], [62.6, 181.0], [62.7, 181.0], [62.8, 181.0], [62.9, 181.0], [63.0, 181.0], [63.1, 181.0], [63.2, 181.0], [63.3, 181.0], [63.4, 181.0], [63.5, 181.0], [63.6, 181.0], [63.7, 181.0], [63.8, 181.0], [63.9, 181.0], [64.0, 181.0], [64.1, 181.0], [64.2, 181.0], [64.3, 181.0], [64.4, 181.0], [64.5, 181.0], [64.6, 181.0], [64.7, 181.0], [64.8, 182.0], [64.9, 182.0], [65.0, 182.0], [65.1, 182.0], [65.2, 182.0], [65.3, 182.0], [65.4, 182.0], [65.5, 182.0], [65.6, 182.0], [65.7, 182.0], [65.8, 185.0], [65.9, 185.0], [66.0, 185.0], [66.1, 185.0], [66.2, 185.0], [66.3, 185.0], [66.4, 185.0], [66.5, 185.0], [66.6, 185.0], [66.7, 190.0], [66.8, 190.0], [66.9, 190.0], [67.0, 190.0], [67.1, 190.0], [67.2, 190.0], [67.3, 190.0], [67.4, 190.0], [67.5, 190.0], [67.6, 190.0], [67.7, 203.0], [67.8, 203.0], [67.9, 203.0], [68.0, 203.0], [68.1, 203.0], [68.2, 203.0], [68.3, 203.0], [68.4, 203.0], [68.5, 203.0], [68.6, 204.0], [68.7, 204.0], [68.8, 204.0], [68.9, 204.0], [69.0, 204.0], [69.1, 204.0], [69.2, 204.0], [69.3, 204.0], [69.4, 204.0], [69.5, 204.0], [69.6, 220.0], [69.7, 220.0], [69.8, 220.0], [69.9, 220.0], [70.0, 220.0], [70.1, 220.0], [70.2, 220.0], [70.3, 220.0], [70.4, 220.0], [70.5, 221.0], [70.6, 221.0], [70.7, 221.0], [70.8, 221.0], [70.9, 221.0], [71.0, 221.0], [71.1, 221.0], [71.2, 221.0], [71.3, 221.0], [71.4, 221.0], [71.5, 227.0], [71.6, 227.0], [71.7, 227.0], [71.8, 227.0], [71.9, 227.0], [72.0, 227.0], [72.1, 227.0], [72.2, 227.0], [72.3, 227.0], [72.4, 236.0], [72.5, 236.0], [72.6, 236.0], [72.7, 236.0], [72.8, 236.0], [72.9, 236.0], [73.0, 236.0], [73.1, 236.0], [73.2, 236.0], [73.3, 236.0], [73.4, 250.0], [73.5, 250.0], [73.6, 250.0], [73.7, 250.0], [73.8, 250.0], [73.9, 250.0], [74.0, 250.0], [74.1, 250.0], [74.2, 250.0], [74.3, 255.0], [74.4, 255.0], [74.5, 255.0], [74.6, 255.0], [74.7, 255.0], [74.8, 255.0], [74.9, 255.0], [75.0, 255.0], [75.1, 255.0], [75.2, 255.0], [75.3, 256.0], [75.4, 256.0], [75.5, 256.0], [75.6, 256.0], [75.7, 256.0], [75.8, 256.0], [75.9, 256.0], [76.0, 256.0], [76.1, 256.0], [76.2, 262.0], [76.3, 262.0], [76.4, 262.0], [76.5, 262.0], [76.6, 262.0], [76.7, 262.0], [76.8, 262.0], [76.9, 262.0], [77.0, 262.0], [77.1, 262.0], [77.2, 264.0], [77.3, 264.0], [77.4, 264.0], [77.5, 264.0], [77.6, 264.0], [77.7, 264.0], [77.8, 264.0], [77.9, 264.0], [78.0, 264.0], [78.1, 285.0], [78.2, 285.0], [78.3, 285.0], [78.4, 285.0], [78.5, 285.0], [78.6, 285.0], [78.7, 285.0], [78.8, 285.0], [78.9, 285.0], [79.0, 285.0], [79.1, 318.0], [79.2, 318.0], [79.3, 318.0], [79.4, 318.0], [79.5, 318.0], [79.6, 318.0], [79.7, 318.0], [79.8, 318.0], [79.9, 318.0], [80.0, 333.0], [80.1, 333.0], [80.2, 333.0], [80.3, 333.0], [80.4, 333.0], [80.5, 333.0], [80.6, 333.0], [80.7, 333.0], [80.8, 333.0], [80.9, 333.0], [81.0, 334.0], [81.1, 334.0], [81.2, 334.0], [81.3, 334.0], [81.4, 334.0], [81.5, 334.0], [81.6, 334.0], [81.7, 334.0], [81.8, 334.0], [81.9, 334.0], [82.0, 335.0], [82.1, 335.0], [82.2, 335.0], [82.3, 335.0], [82.4, 335.0], [82.5, 335.0], [82.6, 335.0], [82.7, 335.0], [82.8, 335.0], [82.9, 337.0], [83.0, 337.0], [83.1, 337.0], [83.2, 337.0], [83.3, 337.0], [83.4, 337.0], [83.5, 337.0], [83.6, 337.0], [83.7, 337.0], [83.8, 337.0], [83.9, 341.0], [84.0, 341.0], [84.1, 341.0], [84.2, 341.0], [84.3, 341.0], [84.4, 341.0], [84.5, 341.0], [84.6, 341.0], [84.7, 341.0], [84.8, 342.0], [84.9, 342.0], [85.0, 342.0], [85.1, 342.0], [85.2, 342.0], [85.3, 342.0], [85.4, 342.0], [85.5, 342.0], [85.6, 342.0], [85.7, 342.0], [85.8, 348.0], [85.9, 348.0], [86.0, 348.0], [86.1, 348.0], [86.2, 348.0], [86.3, 348.0], [86.4, 348.0], [86.5, 348.0], [86.6, 348.0], [86.7, 362.0], [86.8, 362.0], [86.9, 362.0], [87.0, 362.0], [87.1, 362.0], [87.2, 362.0], [87.3, 362.0], [87.4, 362.0], [87.5, 362.0], [87.6, 362.0], [87.7, 368.0], [87.8, 368.0], [87.9, 368.0], [88.0, 368.0], [88.1, 368.0], [88.2, 368.0], [88.3, 368.0], [88.4, 368.0], [88.5, 368.0], [88.6, 374.0], [88.7, 374.0], [88.8, 374.0], [88.9, 374.0], [89.0, 374.0], [89.1, 374.0], [89.2, 374.0], [89.3, 374.0], [89.4, 374.0], [89.5, 374.0], [89.6, 388.0], [89.7, 388.0], [89.8, 388.0], [89.9, 388.0], [90.0, 388.0], [90.1, 388.0], [90.2, 388.0], [90.3, 388.0], [90.4, 388.0], [90.5, 404.0], [90.6, 404.0], [90.7, 404.0], [90.8, 404.0], [90.9, 404.0], [91.0, 404.0], [91.1, 404.0], [91.2, 404.0], [91.3, 404.0], [91.4, 404.0], [91.5, 416.0], [91.6, 416.0], [91.7, 416.0], [91.8, 416.0], [91.9, 416.0], [92.0, 416.0], [92.1, 416.0], [92.2, 416.0], [92.3, 416.0], [92.4, 428.0], [92.5, 428.0], [92.6, 428.0], [92.7, 428.0], [92.8, 428.0], [92.9, 428.0], [93.0, 428.0], [93.1, 428.0], [93.2, 428.0], [93.3, 428.0], [93.4, 441.0], [93.5, 441.0], [93.6, 441.0], [93.7, 441.0], [93.8, 441.0], [93.9, 441.0], [94.0, 441.0], [94.1, 441.0], [94.2, 441.0], [94.3, 450.0], [94.4, 450.0], [94.5, 450.0], [94.6, 450.0], [94.7, 450.0], [94.8, 450.0], [94.9, 450.0], [95.0, 450.0], [95.1, 450.0], [95.2, 450.0], [95.3, 475.0], [95.4, 475.0], [95.5, 475.0], [95.6, 475.0], [95.7, 475.0], [95.8, 475.0], [95.9, 475.0], [96.0, 475.0], [96.1, 475.0], [96.2, 542.0], [96.3, 542.0], [96.4, 542.0], [96.5, 542.0], [96.6, 542.0], [96.7, 542.0], [96.8, 542.0], [96.9, 542.0], [97.0, 542.0], [97.1, 542.0], [97.2, 628.0], [97.3, 628.0], [97.4, 628.0], [97.5, 628.0], [97.6, 628.0], [97.7, 628.0], [97.8, 628.0], [97.9, 628.0], [98.0, 628.0], [98.1, 668.0], [98.2, 668.0], [98.3, 668.0], [98.4, 668.0], [98.5, 668.0], [98.6, 668.0], [98.7, 668.0], [98.8, 668.0], [98.9, 668.0], [99.0, 668.0], [99.1, 1205.0], [99.2, 1205.0], [99.3, 1205.0], [99.4, 1205.0], [99.5, 1205.0], [99.6, 1205.0], [99.7, 1205.0], [99.8, 1205.0], [99.9, 1205.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 71.0, "series": [{"data": [[1200.0, 1.0], [600.0, 2.0], [300.0, 12.0], [200.0, 12.0], [400.0, 6.0], [100.0, 71.0], [500.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 4.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 101.0, "series": [{"data": [[0.0, 101.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 4.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 2.245283018867925, "minX": 1.78479042E12, "maxY": 2.4807692307692304, "series": [{"data": [[1.78479042E12, 2.4807692307692304], [1.78479048E12, 2.245283018867925]], "isOverall": false, "label": "NonGUI2", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78479048E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 206.31372549019605, "minX": 1.0, "maxY": 321.87500000000006, "series": [{"data": [[1.0, 321.87500000000006], [2.0, 206.31372549019605], [3.0, 227.32608695652175]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[2.3619047619047606, 224.32380952380947]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 3.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 113.53333333333333, "minX": 1.78479042E12, "maxY": 9658.383333333333, "series": [{"data": [[1.78479042E12, 8311.316666666668], [1.78479048E12, 9658.383333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78479042E12, 113.53333333333333], [1.78479048E12, 115.71666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78479048E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 223.5849056603774, "minX": 1.78479042E12, "maxY": 225.07692307692304, "series": [{"data": [[1.78479042E12, 225.07692307692304], [1.78479048E12, 223.5849056603774]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78479048E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 201.47169811320754, "minX": 1.78479042E12, "maxY": 204.73076923076917, "series": [{"data": [[1.78479042E12, 204.73076923076917], [1.78479048E12, 201.47169811320754]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78479048E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 11.867924528301891, "minX": 1.78479042E12, "maxY": 24.403846153846157, "series": [{"data": [[1.78479042E12, 24.403846153846157], [1.78479048E12, 11.867924528301891]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78479048E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 112.0, "minX": 1.78479042E12, "maxY": 1205.0, "series": [{"data": [[1.78479042E12, 1205.0], [1.78479048E12, 542.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78479042E12, 137.0], [1.78479048E12, 112.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78479042E12, 411.8000000000002], [1.78479048E12, 397.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78479042E12, 1205.0], [1.78479048E12, 542.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78479042E12, 157.5], [1.78479048E12, 169.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78479042E12, 641.9999999999998], [1.78479048E12, 443.7]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78479048E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 149.5, "minX": 2.0, "maxY": 551.5, "series": [{"data": [[4.0, 551.5], [8.0, 177.0], [2.0, 337.0], [10.0, 282.0], [11.0, 151.0], [12.0, 161.0], [13.0, 160.0], [14.0, 149.5], [15.0, 156.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 135.0, "minX": 2.0, "maxY": 548.5, "series": [{"data": [[4.0, 548.5], [8.0, 155.0], [2.0, 325.5], [10.0, 255.5], [11.0, 136.0], [12.0, 137.0], [13.0, 154.0], [14.0, 135.0], [15.0, 146.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.85, "minX": 1.78479042E12, "maxY": 0.9, "series": [{"data": [[1.78479042E12, 0.9], [1.78479048E12, 0.85]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78479048E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.8666666666666667, "minX": 1.78479042E12, "maxY": 0.8833333333333333, "series": [{"data": [[1.78479042E12, 0.8666666666666667], [1.78479048E12, 0.8833333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78479048E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.8666666666666667, "minX": 1.78479042E12, "maxY": 0.8833333333333333, "series": [{"data": [[1.78479042E12, 0.8666666666666667], [1.78479048E12, 0.8833333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78479048E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.8666666666666667, "minX": 1.78479042E12, "maxY": 0.8833333333333333, "series": [{"data": [[1.78479042E12, 0.8666666666666667], [1.78479048E12, 0.8833333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78479048E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

