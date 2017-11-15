import java.util.Scanner;

public class herman {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int R = scan.nextInt();
		System.out.println(Math.PI * R * R);
		System.out.println(2 * R * R);
		scan.close();
	}
}
