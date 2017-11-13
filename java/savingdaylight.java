import java.util.Scanner;

public class savingdaylight {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		while (scan.hasNext()) {
			String month = scan.next();
			int day = scan.nextInt();
			int year = scan.nextInt();
			String t1 = scan.next();
			String t2 = scan.next();
			int t1_hr = Integer.parseInt(t1.split(":")[0]);
			int t1_min = Integer.parseInt(t1.split(":")[1]);
			int t1_sec = t1_hr * 60 + t1_min;
			int t2_hr = Integer.parseInt(t2.split(":")[0]);
			int t2_min = Integer.parseInt(t2.split(":")[1]);
			int t2_sec = t2_hr * 60 + t2_min;
			int time_diff = t2_sec - t1_sec;
			System.out.println(month + " " + day + " " + year + " " + (time_diff / 60) + " hours " + (time_diff % 60)
					+ " minutes");
		}
		scan.close();
	}
}
