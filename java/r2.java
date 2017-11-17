import java.util.Scanner;

public class r2 {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int R1 = scan.nextInt();
		int S = scan.nextInt();
		System.out.println(2 * S - R1);
		scan.close();
	}
}
