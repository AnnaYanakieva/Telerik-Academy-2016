using System;

class Age
{
    static void Main()
    {
        DateTime birthDate = DateTime.Parse(Console.ReadLine());
        //Console.WriteLine(birthDate);

        DateTime currentDate = DateTime.Now;
        int currentAge = (currentDate.Year - birthDate.Year);
        if (birthDate > currentDate.AddYears(-currentAge))
        {
             currentAge--;
        }
        Console.WriteLine(currentAge);
        Console.WriteLine(currentAge+10);
    }
}

