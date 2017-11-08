import java.util.Arrays;
import java.util.Scanner;

public class busyschedule {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int n;
		while ((n = scan.nextInt()) != 0) {
			scan.nextLine();
			Time[] schedule = new Time[n];
			for(int i = 0; i < n; i++)
				schedule[i] = new Time(scan.nextLine());
			Arrays.sort(schedule);
			for(int i = 0; i < n; i++)
				System.out.println(schedule[i]);
			System.out.println();
		}
		scan.close();
	}
}

class Time implements Comparable<Time> {
	int hour;
	int minute;
	String meridiem;
	
	public Time(String t) {
		String[] t_1 = t.split(" ");
		meridiem = t_1[1];
		String[] t_2 = t_1[0].split(":");
		hour = Integer.parseInt(t_2[0]);
		minute = Integer.parseInt(t_2[1]);
	}

	public int compareTo(Time other) {
		if (!meridiem.equals(other.meridiem))
			return meridiem.compareTo(other.meridiem);
		else if (hour != other.hour)
			if (hour != 12 && other.hour != 12)
				return hour - other.hour;
			else {
				if (hour == 12)
					return -other.hour;
				else
					return hour;
			}
		else
			return minute - other.minute;
	}
	
	public String toString() {
		return hour + ":" + ("00" + minute).substring(String.valueOf(minute).length()) + " " + meridiem;
	}
}
