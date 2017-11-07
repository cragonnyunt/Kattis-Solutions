import java.util.Scanner;

public class beatspread {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int n = scan.nextInt();
		while (n-- > 0) {
			int s = scan.nextInt();
			int d = scan.nextInt();
			if (s < d || s % 2 != d % 2)
				System.out.println("impossible");
			else
				System.out.println((s + d) / 2 + " " + (s - d) / 2);
		}
		scan.close();
	}
}
