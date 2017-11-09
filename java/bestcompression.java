import java.util.Scanner;

public class bestcompression {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		long N = scan.nextLong();
		int b = scan.nextInt();
		System.out.println(N <= Math.pow(2, b + 1) - 1 ? "yes" : "no");
		scan.close();
	}
}
