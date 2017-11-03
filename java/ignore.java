import java.util.Scanner;

public class ignore {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		while (scan.hasNextInt()) {
			int K = scan.nextInt();
			while (K > 0) {
				int remainder = K % 7;
				switch (remainder) {
				case 3:
					System.out.print("5");
					break;
				case 4:
					System.out.print("9");
					break;
				case 5:
					System.out.print("8");
					break;
				default:
					System.out.print(remainder);
					break;
				}
				K /= 7;
			}
			System.out.println();
		}
		scan.close();
	}
}
