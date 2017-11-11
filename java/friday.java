import java.util.Scanner;

public class friday {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int T = scan.nextInt();
		while (T-- > 0) {
			scan.nextInt();
			int M = scan.nextInt();
			int[] daysOfMonth = new int[M];
			for (int i = 0; i < M; i++)
				daysOfMonth[i] = scan.nextInt();
			int count = 0;
			int start = 0;
			for (int day : daysOfMonth) {
				int end = (start + (day % 7)) % 7;
				if (start == 0 && day >= 13)
					count++;
				start = end;
			}
			System.out.println(count);
		}
		scan.close();
	}
}
