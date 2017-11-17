import java.util.Scanner;

public class natrij {
	static int getSec(String time) {
		String[] t = time.split(":");
		int time_sec = 0;
		time_sec += 3600 * Integer.parseInt(t[0]);
		time_sec += 60 * Integer.parseInt(t[1]);
		time_sec += Integer.parseInt(t[2]);
		return time_sec;
	}

	static String padLeft(int str) {
		return ("00" + str).substring(String.valueOf(str).length());
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int time1 = getSec(scan.next());
		int time2 = getSec(scan.next());
		int time_difference = time2 - time1;
		if (time_difference <= 0)
			time_difference += 86400;
		System.out.printf("%s:", padLeft(time_difference / 3600));
		System.out.printf("%s:", padLeft(time_difference % 3600 / 60));
		System.out.printf("%s:", padLeft(time_difference % 60));
		scan.close();
	}
}
