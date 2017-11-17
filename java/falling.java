import java.util.Scanner;

public class falling {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int input = scan.nextInt();
		int X = -1;
		int minXSum = Integer.MAX_VALUE;
		for (int i = 1; i <= Math.ceil(Math.sqrt(input)); i++) {
			if (input % i == 0) {
				int factor = input / i;
				if ((i + factor) % 2 == 0)
					if (minXSum > i + factor) {
						minXSum = i + factor;
						X = i;
					}
			}
		}
		if (X == -1) {
			System.out.println("impossible");
		} else {
			int Y = input / X;
			int a = (Y + X) / 2;
			int b = (Y - X) / 2;
			System.out.printf("%d %d", b, a);
		}
		scan.close();
	}
}
