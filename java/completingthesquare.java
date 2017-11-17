import java.util.Scanner;

public class completingthesquare {
	static int getDistanceSqrt(int x1, int y1, int x2, int y2) {
		int x = x1 - x2;
		int y = y1 - y2;
		return x * x + y * y;
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int x1 = scan.nextInt();
		int y1 = scan.nextInt();
		int x2 = scan.nextInt();
		int y2 = scan.nextInt();
		int x3 = scan.nextInt();
		int y3 = scan.nextInt();
		if (getDistanceSqrt(x2, y2, x3, y3) == getDistanceSqrt(x1, y1, x2, y2) + getDistanceSqrt(x1, y1, x3, y3))
			System.out.printf("%d %d", -x1 + x2 + x3, -y1 + y2 + y3);
		else if (getDistanceSqrt(x1, y1, x3, y3) == getDistanceSqrt(x2, y2, x1, y1) + getDistanceSqrt(x2, y2, x3, y3))
			System.out.printf("%d %d", x1 - x2 + x3, y1 - y2 + y3);
		else
			System.out.printf("%d %d", x1 + x2 - x3, y1 + y2 - y3);
		scan.close();
	}
}
