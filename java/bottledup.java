import java.util.Scanner;

public class bottledup {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int s = scan.nextInt();
		int v1 = scan.nextInt();
		int v2 = scan.nextInt();
		int a = 0, b = 0;
		for (int i = 0; i <= s / v1; i++) {
			int j;
			if ((s - v1 * i) % v2 == 0 && (i + (j = (s - v1 * i) / v2) < a + b || a + b == 0)) {
				a = i;
				b = j;
			}
		}
		if (a + b == 0)
			System.out.printf("Impossible");
		else
			System.out.printf("%d %d", a, b);
		scan.close();
	}
}
