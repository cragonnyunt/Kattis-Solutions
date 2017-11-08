import java.util.Scanner;

public class irepeatmyself {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int n = scan.nextInt();
		scan.nextLine();
		while (n-- > 0) {
			String str = scan.nextLine();
			int length = str.length();
			for (int i = 1; i < length; i++) {
				if (str.startsWith(str.substring(i))) {
					length = i;
					break;
				}
			}
			System.out.println(length);
		}
		scan.close();
	}
}
