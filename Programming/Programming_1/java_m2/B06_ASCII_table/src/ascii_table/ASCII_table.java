package ascii_table;

public class ASCII_table
{
    public static void main(String[] args)
    {
        char ascii = 32;
        int number = 32;
        int linecount = 0;

        while (ascii != 256)
        {
            if (linecount == 6){
                System.out.println();
                linecount = 0;
            }
            System.out.print(ascii + " (" + number + ") ");

            ascii++;
            number++;
            linecount++;
        }
    }
}
