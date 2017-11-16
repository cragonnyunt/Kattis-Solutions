import java.util.Scanner;

public class speedlimit {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int n;
		while ((n = scan.nextInt()) != -1) {
			int miles = 0, preVt = 0;
			for (int i = 0; i < n; i++) {
				int s = scan.nextInt();
				int t = scan.nextInt();
				miles += s * (t - preVt);
				preVt = t;
			}
			System.out.printf("%d miles%n", miles);
		}
		scan.close();
	}
}
