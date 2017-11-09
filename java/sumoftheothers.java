import java.util.Scanner;

public class sumoftheothers {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		while (scan.hasNextLine()) {
			String[] str = scan.nextLine().split(" ");
			int[] num = new int[str.length];
			for (int i = 0; i < num.length; i++)
				num[i] = Integer.parseInt(str[i]);
			for (int i = 0; i < num.length; i++) {
				int sum = 0;
				for (int j = 0; j < num.length; j++)
					if (i != j)
						sum += num[j];
				if (sum == num[i]) {
					System.out.println(num[i]);
					break;
				}
			}
		}
		scan.close();
	}
}
