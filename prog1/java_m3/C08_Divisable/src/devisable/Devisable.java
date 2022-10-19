package devisable;

import java.util.Scanner;

public class Devisable
{
    public static void main(String[] args)
    {
        Scanner keyboard = new Scanner(System.in);

        System.out.print("Enter the first number: ");
        int first = keyboard.nextInt();
        System.out.print("Enter the second number: ");
        int second = keyboard.nextInt();
        int max = 1001;
        int start = 1;
        
        while (start != max)
        {
            boolean devisablebyfirst = start % first == 0;
            boolean devisablebysecond = start % second == 0;
            if (devisablebyfirst){
                if (devisablebysecond)
                    System.out.println(start);}
            start++;
        }
    }
}
