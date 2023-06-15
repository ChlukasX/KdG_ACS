package alphabetical_order;

import java.util.*;

public class AlphabeticalOrder
{
    public static void main(String[] args)
    {
        Scanner keyboard = new Scanner(System.in);

        System.out.print("Enter a text: ");
        String first = keyboard.nextLine();
        System.out.print("Enter another text: ");
        String second = keyboard.nextLine();

        String i = first.trim(); String ii = second.trim();
        System.out.print(i + " " + ii);
    }
}
