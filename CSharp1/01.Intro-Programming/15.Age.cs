//Write a program that reads your birthday(in the format MM.DD.YYYY) from the console 
//and prints on the console how old you are you now and how old will you be after 10 years.

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

