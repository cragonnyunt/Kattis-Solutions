import java.util.Scanner;

public class matrix {
	static int getX(int a, int b, int c, int d) {
		return b / (c * b - a * d);
	}

	static int getY(int a, int b, int c, int d) {
		return a / (a * d - b * c);
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int count = 1;
		while (scan.hasNextInt()) {
			int a = scan.nextInt();
			int b = scan.nextInt();
			int c = scan.nextInt();
			int d = scan.nextInt();
			int x = getX(c, d, a, b);
			int y = getX(a, b, c, d);
			int z = getY(c, d, a, b);
			int w = getY(a, b, c, d);
			System.out.printf("Case %d:%n", count++);
			System.out.printf("%d %d%n", x, y);
			System.out.printf("%d %d%n", z, w);
		}
		scan.close();
	}
}
