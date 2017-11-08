import java.util.Scanner;

public class triangle {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int count = 1;
		while(scan.hasNextInt()) {
			int n = scan.nextInt();
			int digits = (int) Math.ceil(n * Math.log10(1.5) + Math.log10(3));
			System.out.println("Case " + count++ + ": " + digits);
		}
		scan.close();
	}
}
