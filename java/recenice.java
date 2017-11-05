import java.util.Scanner;

public class recenice {
	static int[] neededCount = new int[1000];
	static String[] NameDec = new String[] { "", "one", "two", "three", "four", "five", "six", "seven", "eight",
			"nine" };
	static String[] Name10s = new String[] { "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
			"seventeen", "eighteen", "nineteen" };
	static String[] NameDD = new String[] { "", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy",
			"eighty", "ninety" };
	static {
		for (int i = 4; i < neededCount.length; i++) {
			int needed = i - getName(i).length();
			if (neededCount[needed] == 0)
				neededCount[needed] = i;
		}
	}

	static String getName(int num) {
		StringBuilder sb = new StringBuilder();
		int hundreds = num / 100;
		if (hundreds > 0) {
			sb.append(NameDec[hundreds]);
			sb.append("hundred");
		}
		int decs = (num % 100) / 10;
		if (decs > 1)
			sb.append(NameDD[decs]);
		else if (decs == 1) {
			sb.append(Name10s[num % 100 - 10]);
			return sb.toString();
		}
		int digit = (num % 10);
		if (digit > 0)
			sb.append(NameDec[digit]);
		return sb.toString();
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int N = scan.nextInt();
		int length = 0;
		StringBuilder sb = new StringBuilder();
		for (int i = 0; i < N; i++) {
			String input = scan.next();
			sb.append(input + " ");
			length += input.length();
		}
		length--;
		String reqNStr = getName(neededCount[length]);
		int index = sb.indexOf("$");
		System.out.println(sb.replace(index, index + 1, reqNStr));
		scan.close();
	}
}
