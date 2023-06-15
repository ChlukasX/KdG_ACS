package BMIv02;

import java.util.Scanner;

public class BMIv02
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

        System.out.println("Your BMI is: " + bmi);

            if (bmi < 18)
                System.out.print("Your are underweight");
            else if (bmi > 18 && bmi < 25)
                System.out.print("You have a healthy weight");
            else if (bmi >= 25 && bmi < 30)
                System.out.print("You are overweight");
            else if (bmi >= 30)
                System.out.print("You are obese");
    }
}
