import java.util.Arrays;
import java.util.Scanner;

public class simplicity {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		String input = scan.next();
		int[] char_counts = new int[26];
		for (char c : input.toCharArray())
			char_counts[c - 'a']++;
		Arrays.sort(char_counts);
		int count = 0;
		for (int i = 0; i < char_counts.length - 2; i++)
			count += char_counts[i];
		System.out.println(count);
		scan.close();
	}
}
