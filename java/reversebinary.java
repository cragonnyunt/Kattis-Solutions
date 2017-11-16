import java.util.Scanner;

public class reversebinary {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int num = scan.nextInt();
		StringBuilder sb = new StringBuilder();
		while (num > 0) {
			sb.append(num % 2);
			num /= 2;
		}
		System.out.println(Integer.parseInt(sb.toString(), 2));
		scan.close();
	}
}
