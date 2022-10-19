package age;

import java.util.Scanner;

public class Age
{
    public static void main(String[] args)
    {
        Scanner keyboard = new Scanner (System.in);

        System.out.print("Enter your age: ");
        int age = keyboard.nextInt();

        if (age < 2)
            System.out.print("Baby < 2");
        else if (age > 2 && age < 12) {
            System.out.print("Child 2-12");}
        else if (age > 13 && age <17) {
            System.out.print("Teenager 13-17");}
        else if (age > 18) {
            System.out.print("Adult 18+");}
    }
}
