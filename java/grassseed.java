import java.util.Scanner;

public class grassseed {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		double C = scan.nextDouble();
		int L = scan.nextInt();
		double CTotal = 0.0;
		while (L-- > 0) {
			double wi = scan.nextDouble();
			double li = scan.nextDouble();
			CTotal += wi * li * C;
		}
		System.out.println(CTotal);
		scan.close();
	}
}
