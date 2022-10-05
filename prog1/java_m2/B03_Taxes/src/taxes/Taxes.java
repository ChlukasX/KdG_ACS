package taxes;

import java.util.Scanner;

public class Taxes
{
    public static void main(String[] args)
    {
        Scanner keyboard = new Scanner(System.in);

        System.out.print("Enter a VAT amount: ");
        double vat = keyboard.nextDouble();
        System.out.print("Enter an amount in €: ");
        double amount = keyboard.nextDouble();
        System.out.print("Make a choice (1 = inclusive, 2 = exclusive): ");
        int choice = keyboard.nextInt();

        double vati = vat / 100; double vatii = vati + 1;

        if (choice == 1){
            double sumi = amount * vatii;
            double novat = (amount - sumi) + amount;
            System.out.print("€" + novat + " + " + vat + "% VAT = €" ); System.out.printf("%.2f", amount);}
        else if (choice == 2){
            double exclusive_amount = amount + vat;
            System.out.print("€" + amount + " + " + vat + "% VAT = €" ); System.out.printf("%.2f", exclusive_amount);}
        else if (choice != 1 || choice != 2)
            System.out.print("Invalid choice!");
    }
}
