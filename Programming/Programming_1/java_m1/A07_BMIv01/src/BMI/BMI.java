package BMI;

import java.util.Scanner;

public class BMI
{
    public static void main(String[] args)
    {
        Scanner keyboard;
        keyboard = new Scanner(System.in);

        System.out.println("Dear patient, this programme will calculate your BMI.");
        System.out.print("Enter your weight in kilograms: ");
        int weight = keyboard.nextInt();
        System.out.print("Enter your height in meters: ");
        float height = keyboard.nextFloat();

        float bmi = weight / (height * height);
        System.out.print("Your BMI is: " + bmi);
    }
}
