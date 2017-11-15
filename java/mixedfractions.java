import java.util.Scanner;

public class mixedfractions {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int numerator, denominator;
		while ((numerator = scan.nextInt()) != 0 | (denominator = scan.nextInt()) != 0)
			System.out.printf("%d %d / %d", numerator / denominator, numerator % denominator, denominator);
		scan.close();
	}
}
