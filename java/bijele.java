import java.util.Scanner;

public class bijele {
	static final int[] read_set = { 1, 1, 2, 2, 2, 8 };

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		for (int i = 0; i < read_set.length; i++)
			System.out.printf("%d ", read_set[i] - scan.nextInt());
		scan.close();
	}
}
