import java.util.Scanner;

public class register {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int v2 = scan.nextInt();
		int v3 = scan.nextInt() * 2;
		int v5 = scan.nextInt() * 6;
		int v7 = scan.nextInt() * 30;
		int v11 = scan.nextInt() * 210;
		int v13 = scan.nextInt() * 2310;
		int v17 = scan.nextInt() * 30030;
		int v19 = scan.nextInt() * 510510;
		System.out.println(9699689 - (v2 + v3 + v5 + v7 + v11 + v13 + v17 + v19));
		scan.close();
	}
}
