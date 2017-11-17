import java.util.Scanner;

public class bus {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int T = scan.nextInt();
		while (T-- > 0)
			System.out.println((int) Math.pow(2, scan.nextInt()) - 1);
		scan.close();
	}
}
