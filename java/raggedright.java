import java.util.ArrayList;
import java.util.Scanner;

public class raggedright {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int maxLength = Integer.MIN_VALUE;
		ArrayList<Integer> paragraph = new ArrayList<>();
		while (scan.hasNextLine()) {
			String input = scan.nextLine();
			paragraph.add(input.length());
			maxLength = Math.max(maxLength, input.length());
		}
		int sum = 0;
		for(int i = 0; i < paragraph.size() - 1; i++)
			sum += Math.pow(maxLength - paragraph.get(i), 2);
		System.out.println(sum);
		scan.close();
	}
}
