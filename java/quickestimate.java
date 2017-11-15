import java.util.Scanner;

public class quickestimate {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int N = scan.nextInt();
		while (N-- > 0)
			System.out.println(scan.next().length());
		scan.close();
	}
}
