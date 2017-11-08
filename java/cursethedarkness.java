import java.util.Scanner;

public class cursethedarkness {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int m = scan.nextInt();
		while (m-- > 0) {
			double X = scan.nextDouble();
			double Y = scan.nextDouble();
			int n = scan.nextInt();
			boolean isLighted = false;
			while (n-- > 0) {
				double nX = scan.nextDouble();
				double nY = scan.nextDouble();
				if(!isLighted)
					isLighted = Math.pow(nX - X, 2) + Math.pow(nY - Y, 2) <= 64;
			}
			System.out.println(isLighted ? "light a candle" : "curse the darkness");
		}
		scan.close();
	}
}
