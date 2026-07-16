package com.AccessModifierExample;

public class Protected  extends B{
	{

	Protected obj= new Protected();
	int output= obj.z;
	System.out.println("Value of z is"+output);
	obj.protectedmethod();

}
}
