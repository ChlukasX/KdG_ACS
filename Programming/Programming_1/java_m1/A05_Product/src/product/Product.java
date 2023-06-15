package product;

import java.util.Scanner;

public class Product
{
    public static void main(String[] args)
    {
        int sum;
        int first;
        int second;
        int third;
        Scanner keyboard;
        keyboard = new Scanner(System.in);

        System.out.print("Enter a number: ");
        first = keyboard.nextInt();
        System.out.print("Enter a second number: ");
        second = keyboard.nextInt();
        System.out.print("Enter a final number: ");
        third = keyboard.nextInt();

        sum = (first * second) * third;
        System.out.print("The product is: " + sum);
    }
}
