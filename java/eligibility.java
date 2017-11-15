import java.util.Scanner;

public class eligibility {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int cases = scan.nextInt();
		while (cases-- > 0) {
			String name = scan.next();
			String postDate = scan.next();
			String DoB = scan.next();
			int courses = scan.nextInt();
			int postYear = Integer.parseInt(postDate.split("/")[0]);
			int DoBYear = Integer.parseInt(DoB.split("/")[0]);
			if (postYear >= 2010 || DoBYear >= 1991)
				System.out.println(name + " eligible");
			else if (courses >= 41)
				System.out.println(name + " ineligible");
			else
				System.out.println(name + " coach petitions");
		}
		scan.close();
	}
}
