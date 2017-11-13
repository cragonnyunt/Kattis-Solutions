import java.util.Scanner;

public class statistics {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int cases = 1;
		while (scan.hasNextInt()) {
			int n = scan.nextInt();
			int max = Integer.MIN_VALUE;
			int min = Integer.MAX_VALUE;
			while (n-- > 0) {
				int num = scan.nextInt();
				max = Math.max(max, num);
				min = Math.min(min, num);
			}
			System.out.println("Case " + cases++ + ": " + min + " " + max + " " + (max - min));
		}
		scan.close();
	}
}
