#! /bin/bash
#
# Create the official release
#

VERSION=$1
REPO=qazbnm456/vue-logics
GITHUB_REPO=https://github.com/$REPO

if [ -z $VERSION ]; then
    echo "Usage: $0 VERSION [publish]"
    exit 1
fi

echo "##> Tagging the release as $VERSION"
git tag $VERSION || exit 1
if  [[ $2 == 'publish' ]]; then
    echo "##> Pushing tag to github"
    git push $GITHUB_REPO $VERSION || exit 1
    echo "##> Publishing to npm"
    npm publish
    echo "##> Done"
fi
