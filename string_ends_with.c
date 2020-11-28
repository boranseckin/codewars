#include <stdbool.h>
#include <string.h>

bool solution(const char *string, const char *ending)
{
    if (strlen(string) < strlen(ending))
        return false;

    const char* end_ptr = string + strlen(string) - strlen(ending);
    
    if (strcmp(end_ptr, ending) == 0)
        return true;

    return false;
}
