import java.util.Scanner;

public class humancannonball2 {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int N = scan.nextInt();
		while (N-- > 0) {
			double v0 = scan.nextDouble();
			double theta = scan.nextDouble() * Math.PI / 180;
			double x1 = scan.nextDouble();
			double h1 = scan.nextDouble();
			double h2 = scan.nextDouble();
			double t = x1 / (v0 * Math.cos(theta));
			double y1 = v0 * t * Math.sin(theta) - 4.9 * t * t;
			if (y1 + 1 > h2 || y1 - 1 < h1)
				System.out.println("Not  Safe");
			else
				System.out.println("Safe");
		}
		scan.close();
	}
}
