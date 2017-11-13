import java.util.Scanner;

public class bus {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int T = scan.nextInt();
		while (T-- > 0) {
			int k = scan.nextInt();
			System.out.println((int) Math.pow(2, k) - 1);
		}
		scan.close();
	}
}
