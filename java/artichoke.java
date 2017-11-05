import java.util.Scanner;

public class artichoke {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int p = scan.nextInt();
		int a = scan.nextInt();
		int b = scan.nextInt();
		int c = scan.nextInt();
		int d = scan.nextInt();
		int n = scan.nextInt();
		double prevMax = Double.MIN_VALUE;
		double maxDecline = 0;
		for (int i = 1; i <= n; i++) {
			double price = p * (Math.sin(a * i + b) + Math.cos(c * i + d) + 2);
			if (prevMax > price)
				maxDecline = Math.max(maxDecline, prevMax - price);
			else if (prevMax < price)
				prevMax = price;
		}
		System.out.println(maxDecline);
		scan.close();
	}
}
