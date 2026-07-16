package com.Constructors;
//create java program using constructor ,seeter and getter method for employee having id ,name and salary.
class Employee{
	private int id;
	private String name;
	private float salary;
	private String ssn;
	
	public Employee(int id,String name,float salary,String ssn) {
		this.id=id;
		this.name=name;
		this.salary=salary;
		this.ssn=ssn;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public float getSalary() {
		return salary;
	}
	public void setSalary(float salary) {
		this.salary = salary;
	}
	public String getSsn() {
		return ssn;
	}
	public void setSsn(String ssn) {
		this.ssn = ssn;
	}
	
	 
}

public class Setter_and_Getter {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Employee kuldeep =new Employee(143,"Kuldeep sharma",1220000.500f,"237681384");
		System.out.println("Employee id:\t\t"+kuldeep.getId());
		System.out.println("Employee name:\t\t"+kuldeep.getName());
		System.out.println("Employee salary:\t\t"+kuldeep.getSalary());
		System.out.println("Employee SSN:\t\t"+kuldeep.getSsn());
		

	}

}
