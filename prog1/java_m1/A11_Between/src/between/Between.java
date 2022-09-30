package between;

import java.util.Scanner;

public class Between
{
    public static void main(String[] args)
    {
        Scanner keyboard = new Scanner(System.in);

        System.out.print("Enter the first number (1..100): ");
        int first = keyboard.nextInt();
        System.out.print("Enter the second number (1..100): ");
        int second = keyboard.nextInt();
        System.out.print("Enter the third number (1..100): ");
        int third = keyboard.nextInt();

        if ((first > second && first < third) || (first < second && first > third)){
            System.out.print("The middle number is: " + first);}

        else if ((second > first && second < third) || (second < first && second > third)){
            System.out.print("The middle number is: " + second);}

        else if ((third > first && third < second) || (third < first && third > second)){
            System.out.print("The middle number is: " + third);}
    }
}
