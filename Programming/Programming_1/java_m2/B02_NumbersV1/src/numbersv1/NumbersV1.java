package numbersv1;

import java.util.Scanner;

public class NumbersV1
{
    public static void main(String[] args)
    {
        int MINIMUM = 100000;
        int MAXIMUM = 999999;
        Scanner keyboard = new Scanner(System.in);

        System.out.println("Enter a 6-digit whole number: ");
        int first = keyboard.nextInt();
        System.out.println("Enter another 6-digit while number: ");
        int second = keyboard.nextInt();


        System.out.println("The product is ");
        System.out.print("The 5 final digits are: ");
    }
}
