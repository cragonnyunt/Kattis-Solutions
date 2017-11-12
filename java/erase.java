import java.util.Scanner;

public class erase {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int N = scan.nextInt();
		N %= 2;
		String str1 = scan.next();
		String str2 = scan.next();
		boolean isSucceed = true;
		if (N == 0)
			isSucceed = str1.equals(str2);
		else {
			for(int i = 0; i < str1.length(); i++)
				if(str1.charAt(i) == str2.charAt(i))
				{
					isSucceed = false;
					break;
				}
		}
		System.out.println(isSucceed ? "Deletion succeeded" : "Deletion failed");
		scan.close();
	}
}
