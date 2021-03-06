
export class Strings
{
  private static readonly RANDOM_STRING_AVAILABLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  private static readonly PASSWORD_AVAILABLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$-_.+!*\'(),,';
  
	public static contains(haystack: string, needle: string): boolean
	{
		return haystack.indexOf(needle) >= 0;
	}

	public static startsWith(string: string, prefix: string): boolean
	{
		return string.indexOf(prefix) === 0;
	}

	public static endsWith(string: string, suffix: string): boolean
	{
		return string.indexOf(suffix, string.length - suffix.length) >= 0;
	}
  
  public static random(length: number = 10): string
  {
    return this.generateRandomString(length, this.RANDOM_STRING_AVAILABLE_CHARS);
  }
  
  public static password(length: number)
  {
    return this.generateRandomString(length, this.PASSWORD_AVAILABLE_CHARS);
  }
  
  private static generateRandomString(
    length: number = 10,
    availableCharacters: string = this.RANDOM_STRING_AVAILABLE_CHARS
  )
  {
    let result = '';
    let charactersLength = availableCharacters.length;
    for ( let i = 0; i < length; i++ ) {
      result += availableCharacters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
