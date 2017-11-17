import java.util.Scanner;

public class herman {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int R = scan.nextInt();
		System.out.printf("%f %d%n", Math.PI * R * R, 2 * R * R);
		scan.close();
	}
}
